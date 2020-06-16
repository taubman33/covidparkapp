import React from 'react'

export default function UserForm(props)
{
    return (
        <div>
            <div className="flex flex-col-reverse sm:flex-row">
                <form
                    className="mt-6"
                    onSubmit={(e) =>
                    {
                        e.preventDefault()
                        props.handleSubmit()
                    }} >
                    <div>
                        {props.register ? (<>
                            <p>Email: </p>
                            <input name="email" type="email"
                                value={props.formData.email} onChange={props.handleChange}
                            />

                            <p>Password: </p>
                            <input name="password" type="password"
                                value={props.formData.password} onChange={props.handleChange}
                            />
                        </>)
                            : ""
                        }
                        <p>Name: </p>
                        <input name="name" type="text"
                            value={props.formData.name} onChange={props.handleChange}
                        />

                        <p>Location: </p>
                        <input name="location" type="text"
                            value={props.formData.location} onChange={props.handleChange}
                        />

                    </div>
                    <button className="bg-green-200 border-gray-400 rounded-sm p-1 m-1">{props.register ? "Register" : "Submit Edit"}</button>
                </form>
                <div className="flex flex-col text-center ml-5">
                    <p>User Image </p>
                    <div>
                        <img key="userAvatarPic" className="h-48" src={props.formData.picture_url} alt="Avatar" />
                    </div>
                    <button className="bg-green-200 border-gray-400 rounded-sm p-1 m-1" onClick={props.randomizeAvatar} >Randomize Avatar</button>
                    <p className="text-xs">Powered by <a className="underline" target="_blank" rel="noopener noreferrer" href="https://github.com/fangpenlin/avataaars-generator">Avataaars</a></p>
                </div>
            </div>

        </div>
    )
}
