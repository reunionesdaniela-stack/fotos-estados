"""Baja los precios del catálogo online de Biogreen y los guarda en datos/precios.csv.
Uso: python3 herramientas/precios.py  (catálogo 4663 = Argentina, páginas 522698 en adelante)"""
import csv, json, re, sys, urllib.request, datetime, os

CAT, PRIMERA, PAGINAS = 4663, 522698, 128
URL = "https://catalogo.biogreen.com.ar/catalogue/%d/page/render/elements?" % CAT
filas, vistos = [], set()
for k in range(0, PAGINAS, 4):
    ids = [PRIMERA + k + n for n in range(4) if k + n < PAGINAS]
    q = "&".join("page_id%%5B%%5D=%d" % i for i in ids)
    with urllib.request.urlopen(urllib.request.Request(URL + q, headers={"User-Agent": "Mozilla/5.0"}), timeout=30) as r:
        datos = json.load(r)
    for n, pid in enumerate(ids):
        for trozo in (datos.get(str(pid)) or "").split("page-element-wrapper")[1:]:
            b = re.search(r"data-product-id='(\d+)' data-description='([^']*)' data-price='([\d.]+)'", trozo)
            if not b: continue
            v = re.search(r"var _var\w+ = (\{[^\n]*\});", trozo)
            variantes = []
            if v:
                try:
                    o = json.loads(v.group(1)).get("varieties") or []
                    variantes = o if isinstance(o, list) else list(o.values())
                except ValueError: pass
            items = [(x.get("code") or "", b.group(2) + " – " + x["description"], float(x["price"])) for x in variantes] or [("", b.group(2), float(b.group(3)))]
            for code, nombre, precio in items:
                clave = code or (nombre + str(precio))
                if clave in vistos: continue
                vistos.add(clave); filas.append((k + n + 1, code, nombre.strip(), int(round(precio))))
salida = os.path.join(os.path.dirname(__file__), "..", "datos", "precios.csv")
with open(salida, "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["pagina", "codigo", "producto", "precio"]); w.writerows(filas)
print("%d productos guardados (%s)" % (len(filas), datetime.date.today()))
