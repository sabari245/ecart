import { useState } from "react"

export default function Comment() {

    const [rating, setRating] = useState(0)
    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [comment, setComment] = useState('')

    /**
     * this function check if the state variables are not empty and stores the comment in the local storage along with the other comments which is already present
     */
    const handleSubmit = () => {
        if (rating && name && title && comment) {
            const data = {
                rating,
                name,
                title,
                comment
            }
            const comments = localStorage.getItem('comments')
            let commentlist = comments ? JSON.parse(comments) : []
            commentlist.push(data)
            localStorage.setItem('comments', JSON.stringify(commentlist))

            // reset the state variables
            setRating(0)
            setName('')
            setTitle('')
            setComment('')
        }
    }

    return (
        <div className="px-6 py-24 bg-white isolate sm:py-32 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Leave a Review</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">please, explain about your experience with the product</p>
            </div>
            <div className="max-w-xl mx-auto mt-16 sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">Name</label>
                        <div className="mt-2.5">
                            <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="rating" className="block text-sm font-semibold leading-6 text-gray-900">Rating</label>
                        <div className="mt-2.5">
                            <input value={rating} onChange={(e) => setRating(parseInt(e.target.value))} type="number" name="rating" id="rating" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">Title</label>
                        <div className="mt-2.5">
                            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
                        <div className="mt-2.5">
                            <textarea value={comment} onChange={(e) => setComment(e.target.value)} name="message" id="message" rows={4} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={""} />
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <button onClick={handleSubmit} type="submit" className="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Submit</button>
                </div>
            </div>
        </div>


    )
}
