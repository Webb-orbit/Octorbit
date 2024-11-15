import { Sandpack, SandpackLayout, SandpackProvider } from '@codesandbox/sandpack-react'
import { sandpackDark } from '@codesandbox/sandpack-themes'


const Test = () => {
    return (
        <>
            <div className='w-full h-screen mx-auto my-auto'>
                <SandpackProvider template='react' >
                    <SandpackLayout >
                        <Sandpack
                            options={{
                                showLineNumbers: true,
                                showTabs: true,
                            }}
                            theme={sandpackDark}
                            files={{
                                "/App.js": `export default function App() {
                          return <h1>Hello Sandpack</h1>
                        }`,
                            }}
                        />
                    </SandpackLayout>
                </SandpackProvider>

            </div>
            <div>test</div>
        </>
    )
}

export default Test

