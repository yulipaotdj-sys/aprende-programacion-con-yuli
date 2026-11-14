# Aprende programación con Yuli

App web instalable para aprender HTML, CSS y JavaScript con lecciones, ejemplos y retos.
El código va arriba y el resultado aparece abajo.

- Se instala en el celular y en el computador.
- Abre sin internet y se actualiza sola.
- Tiene certificados con tu nombre de registro (imagen y PDF).
- Puede guardar tu progreso en tu Google Drive.

---

## 1. Subir esta versión a GitHub

Descomprime el zip. En tu repositorio toca **Add file → Upload files** (Agregar archivo → Cargar archivos) y arrastra **lo que hay dentro de la carpeta**, no la carpeta completa:

`index.html`, `sw.js`, `config.js`, `manifest.webmanifest`, `logo.webp`, `README.md` y la carpeta `icons`.

Toca **Confirmar cambios**. Los archivos con el mismo nombre se reemplazan. En 2 o 3 minutos queda publicada.

Tu dirección es:
`https://yulipaotdj-sys.github.io/aprende-programacion-con-yuli/`

## 2. Instalarla en el celular

- En la pantalla de inicio de la app hay un cuadro **"Instala la app en tu celular"** con tu logo. Si tu navegador lo permite, toca **Instalar app**.
- Si no aparece el botón: en Android (Chrome) toca los tres puntos ⋮ y elige **Instalar app**. En iPhone (Safari) toca Compartir y **Agregar a pantalla de inicio**.

Cuando haya una versión nueva, no tienes que descargar nada: la app se actualiza sola al abrirla con internet.

## 3. Nombre de registro y certificados

1. En la pantalla de inicio, baja a **Mi cuenta**.
2. Escribe tu nombre completo en **Mi nombre de registro** y toca **Guardar**.
3. Cuando termines todos los retos de un curso, en **Mis certificados** aparece **Ver certificado**.
4. Ahí puedes descargarlo como **imagen** o como **PDF**.

Hay un certificado por cada curso (HTML, CSS y JavaScript) y uno general cuando terminas los 17 retos.
Es un certificado de finalización de la app y no una titulación oficial.

## 4. Guardar el progreso en Google Drive (se hace una sola vez)

El progreso se guarda en una carpeta privada que la app tiene dentro de tu Drive. Pesa unos pocos kilobytes, no usa Firebase y no aparece en "Mi unidad".

Para que funcione necesitas crear un **ID de cliente** de Google. Es gratis.

1. Entra a [console.cloud.google.com](https://console.cloud.google.com) con tu cuenta de Google.
2. Arriba toca el selector de proyectos, luego **Proyecto nuevo**. Ponle de nombre `Aprende con Yuli` y toca **Crear**.
3. Abre el menú **☰ → APIs y servicios → Biblioteca**. Busca **Google Drive API** y toca **Habilitar**.
4. Ve a **APIs y servicios → Pantalla de consentimiento de OAuth** (o **Google Auth Platform**) y toca **Comenzar**.
   - Nombre de la app: `Aprende programación con Yuli`.
   - Correo de asistencia: tu correo.
   - Público: **Externo**.
5. En **Acceso a los datos** (Data access) toca **Agregar o quitar permisos**. Busca `drive.appdata` ("Ver y administrar sus propios datos de configuración de aplicación en Google Drive"), márcalo y guarda.
6. En **Público** (Audience) agrega tu correo en **Usuarios de prueba**. Si quieres que cualquier persona pueda usar el guardado en Drive, toca **Publicar la aplicación**.
7. Ve a **Clientes** (o **Credenciales**) y toca **Crear cliente** (Crear credenciales → **ID de cliente de OAuth**).
   - Tipo de aplicación: **Aplicación web**.
   - En **Orígenes autorizados de JavaScript** agrega exactamente: `https://yulipaotdj-sys.github.io`
     (solo eso, sin `/aprende-programacion-con-yuli`).
   - Toca **Crear** y copia el **ID de cliente**. Termina en `.apps.googleusercontent.com`.
8. En GitHub abre el archivo `config.js`, toca el lápiz y pega el ID entre las comillas:
   `googleClientId: 'AQUI-VA-TU-ID.apps.googleusercontent.com'`
   Toca **Confirmar cambios**.
9. Abre la app, baja a **Mi cuenta** y toca **Conectar con Google Drive**.

Los nombres de los menús de Google pueden cambiar un poco. Si algo no se ve igual, busca la opción con un nombre parecido.

**Cómo funciona después:**
- Cada vez que superas un reto, el progreso se guarda en Drive.
- Si cambias de celular, abre la app, toca **Conectar con Google Drive** y recuperas tu avance y tu nombre.
- Cada hora Google pide confirmar de nuevo. Si ves "Hay cambios sin guardar en Drive", toca **Sincronizar ahora**.
- El archivo `config.js` no cambia cuando actualizas la app, así que tu ID se queda guardado.

## Nota

Sin conectar Drive, el avance se guarda solo en ese dispositivo y navegador.
