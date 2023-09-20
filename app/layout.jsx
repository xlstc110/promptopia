import '@styles/globals.css';//in Next.js you do not need to indicate the path like regular React.

//export metadata
export const metadata = {
    title:"Promptopia",
    description: 'Discover and Share AI Prompts'
}

const layout = () => {
  return (
    <html>
        <body>
            <div className='main'>
                {/* gradient background */}
                <div className='gradient' />
            </div>

            <main className='app'>
                {children}
            </main>
        </body>
    </html>
  )
}

export default layout