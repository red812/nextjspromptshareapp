import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title: "PromptApp",
    description: "An App to discover & Share GPT Prompts"
}

// this will be the app layout
const RootLayout = ({ children}) => {
  return (
    <html lang='en'>
        <body>
            <div className="main">
                <div className="gradient"/>
            </div>
            <main className="app">
                <Nav/>
                {children}
            </main>
        </body>
    </html>
    
  )
}

export default RootLayout