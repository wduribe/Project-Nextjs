

export const metadata = {
  title: 'First Proyect With Nextjs',
  description: 'Generated by create next app',
}


export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <head>
   
     
      <meta name="author" content="Wilder Uribe"/>
      <meta name="keywords" content="Nextjs, react, neomorfismo, tailwind, css"/>
      <link rel="icon" type="image/x-icon" href="../img/icon.svg"/>
      </head>    
      <body>        
        { children }
      </body>
    </html>
  )
}
