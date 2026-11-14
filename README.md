# Aprende programación con Yuli

App web instalable para aprender HTML, CSS y JavaScript con lecciones, ejemplos y retos.
El código va arriba y el resultado aparece abajo. Funciona sin internet y se actualiza sola.

## Publicarla en GitHub (sin usar la terminal)

1. Entra a [github.com](https://github.com) con tu cuenta.
2. Arriba a la derecha toca **+** y luego **New repository**.
3. Nombre: `aprende-programacion-con-yuli`. Márcalo como **Public** y toca **Create repository**.
4. En la página del repositorio toca el enlace **uploading an existing file**.
5. Arrastra **el contenido** de esta carpeta (`index.html`, `sw.js`, `manifest.webmanifest`, `logo.webp` y la carpeta `icons`), no la carpeta que los contiene. Abajo toca **Commit changes**.
6. Ve a **Settings → Pages**. En **Source** elige **Deploy from a branch**. En **Branch** elige `main` y la carpeta `/ (root)`. Toca **Save**.
7. Espera uno o dos minutos y recarga esa página. Arriba aparece tu dirección:
   `https://TU-USUARIO.github.io/aprende-programacion-con-yuli/`

## Instalarla

- **Android (Chrome):** abre la dirección, toca ⋮ y elige **Instalar app**.
- **iPhone (Safari):** abre la dirección, toca Compartir y **Agregar a pantalla de inicio**.
- **Computador (Chrome o Edge):** ícono de instalar en la barra de direcciones.

## Actualizarla

Cada vez que haya una versión nueva:

1. En tu repositorio toca **Add file → Upload files**.
2. Arrastra los archivos nuevos (por ejemplo `index.html`). Reemplazan a los anteriores.
3. Toca **Commit changes**.

En uno o dos minutos queda publicada. Nadie tiene que descargar nada: la próxima vez que abran la app con internet, se actualiza sola.

## Con la terminal (opcional)

```
git init
git add .
git commit -m "Primera versión"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/aprende-programacion-con-yuli.git
git push -u origin main
```

Para cada versión nueva: `git add .`, `git commit -m "Nueva lección"` y `git push`.

## Nota

El avance y los puntos se guardan en cada dispositivo. Si cambias de celular o de navegador, empiezas de cero.
