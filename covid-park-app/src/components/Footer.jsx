import React, { Component } from 'react'

export default class Footer extends Component
{
    render()
    {
        return (
            <div className="fixed text-xs bottom-0 w-full bg-gray-100">
                <div className="text-center">© 2020
                <a className="underline mx-1 hover:text-green-500" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jeremy-taubman/">
                        Jeremy Taubman
                </a>&
                <a className="underline mx-1 hover:text-green-500" target="_blank" rel="noopener noreferrer" href="https://trevorsmithholbourn.xyz/">
                        Trevor Smith-Holbourn
                </a></div>
            </div>
        )
    }
}


