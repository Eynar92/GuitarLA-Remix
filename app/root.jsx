export default function App() {

    return (
        <Document>
            <h1>Hola Mundo</h1>
        </Document>
    )
}

function Document({ children }) {
    return (
        <html lang="es">
            <head>
                <title>GuitarLA - Remix</title>
            </head>
            <body>
                {children}
            </body>
        </html>
    )
}