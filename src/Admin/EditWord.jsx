import axios from 'axios';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const EditWord = () => {

    const word = useLoaderData()
    console.log(word);

    const handleUpdate = event => {
                  
          event.preventDefault();
          const form = event.target;
          const word = form.word.value;
          const meaning = form.meaning.value;
          const category = form.category.value;
          const antonyms = form.antonyms.value;

          axios.get(`https://vocab-master-server-new.vercel.app/word/${word._id}`)
          .then(res => {
                 console.log(res);
                 if(res.data.modifyCount > 0){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'word updated',
                        showConfirmButton: false,
                        timer: 1500
                      })
                 }
          })
    }
    return (
         <div className='w-full h-full bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900'> 
         <p className='text-center text-4xl font-Sec underline mb-4 mt-5 text-red-600 '>Edit Word</p>
      <form onSubmit={handleUpdate} className='grid grid-cols-2 gap-2 container mx-auto px-20 font-Sec '>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Word
          </label>
          <input
            defaultValue={word[0].word}
            type="text"
            className="border rounded w-full py-2 px-3"
            name="word"
            placeholder="Enter the word"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Meaning
          </label>
          <input
          defaultValue={word[0].meaning.originalBangla[1]}
            type="text"
            className="border rounded w-full py-2 px-3"
            name="meaning"
            placeholder="Enter the meaning"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Category
          </label>
          <input
            defaultValue={word[0].category}
            type="text"
            className="border rounded w-full py-2 px-3"
            name="category"
            placeholder="Enter the category"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Category Image
          </label>
          <input
            type="text"
            className="border rounded w-full py-2 px-3"
            name="categoryImage"
            placeholder="Enter the category image URL"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Antonyms
          </label>
          <input
             defaultValue={word[0].antonyms[1]}
            type="text"
            className="border rounded w-full py-2 px-3"
            name="antonyms"
            placeholder="Enter antonyms"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
          partsOfSpeech
          </label>
          <input
           defaultValue={word[0].partsOfSpeech}
            type="text"
            className="border rounded w-full py-2 px-3"
            name="antonyms"
            placeholder="Enter antonyms"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
          Level
          </label>
          <input
           defaultValue={word[0].level}
            type="text"
            className="border rounded w-full py-2 px-3"
            name="antonyms"
            placeholder="Enter antonyms"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
          difficultyLevel
          </label>
          <input
          defaultValue={word[0].difficultyLevel}
            type="text"
            className="border rounded w-full py-2 px-3"
            name="antonyms"
            placeholder="Enter antonyms"
          />
        </div>


        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 row-span-2 ms-96 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
 

            
        </div>
    );
};

export default EditWord;