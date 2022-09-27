import React from 'react'
import Group1 from "../../Assets/images/Group_38.svg"

const SignInPage = () => {
    return (
        // <div class="align-text-top space-y-1" >
        //     <h1 class="font-bold text-6xl mt-0 mb-2 text-orange-600">Sign in to Scanbills</h1>
        // </div>

        <div class="flex justfy-between">


            <div class="p-2 ml-16">
                <p class="font-bold text-5xl mt-64 mb-14 text-orange-400">Sign in to Scanbills</p>
                <div class="text-center lg:text-left pb-10">
                    <button
                        type="button"
                        class="inline-block px-20 py-4 border-2 border-black text-black font-bold text-xl leading-snug rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                        Sign in with Google
                    </button>
                </div>
                <form>

                    <div class="mb-6">
                        <input
                            type="text"
                            class="form-control block w-full px-7 py-5 text-2xl font-normal text-gray-900 bg-white bg-clip-padding border border-solid border-black rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="name@gmail.com"
                        />
                    </div>

                    <div class="mb-6">
                        <input
                            type="password"
                            class="form-control block w-full px-10 py-5 text-2xl font-normal text-gray-900 bg-white bg-clip-padding border border-solid border-black rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div class="flex justify-between items-center mb-6">
                        <a href="#!" class="text-black font-medium text-2xl">Forgot Password?</a>
                        <div class="form-group form-check">
                            <input
                                type="checkbox"
                                class="form-check-input appearance-none h-4 w-4 border border-black rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                id="exampleCheck2"
                            />
                            <label class="form-check-label inline-block text-black" for="exampleCheck2">Stay logedin</label>
                        </div>

                    </div>
                    <div class="text-center lg:text-left p-4">
                        <button
                            type="button"
                            class="inline-block px-20 py-4 bg-orange-400 text-black font-bold text-xl leading-snug rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                            Sign in
                        </button>
                    </div>
                </form>
                <div class="border-b-2 border-orange-600"></div>
            </div>
            <div class="mt-40">
                <img class="h-4/5"src={Group1} alt="" />

            </div>
            

        </div>


    )
}

export default SignInPage;