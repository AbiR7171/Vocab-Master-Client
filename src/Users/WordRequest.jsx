import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useWords from "../hooks/useWords";
import useUsers from "../hooks/useUsers";

const WordRequest = () => {
  const { register, handleSubmit, errors, reset } = useForm();

  const [wordExist, setWordExist] = useState(false);
  const [selectedPartOfSpeech, setSelectedPartOfSpeech] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [words] = useWords();
  const [user] = useUsers();
  console.log(words);

  // word already exist function start
  const allWords = words.map((word) => word.word);

  const checkWordExistence = (event) => {
    const enteredWord = event.target.value.trim();
    const lowercaseEnteredWord = enteredWord.toLowerCase();

    if (enteredWord === "") {
      setWordExist(false);
    } else if (
      allWords.some((word) => word.toLowerCase() === lowercaseEnteredWord)
    ) {
      setWordExist(true);
    } else {
      setWordExist(false);
    }
  };
  // word already exist function end

  // all parts of speech and word category array start
  const allPartsOfSpeech = [
    "Noun",
    "Verb",
    "Adjective",
    "Adverb",
    "Pronoun",
    "Preposition",
    "Conjunction",
    "Interjection",
    "Article",
    "Determiner",
    "Conjunctive Adverb",
    "Transitive Verb",
    "Intransitive Verb",
    "Gerund",
  ];

  const allCategory = [
    "Marriage ceremony",
    "Pahela Baishakh",
    "Trade fair",
    "Summer",
    "Rainy season",
    "Winter",
    "Time",
    "Hobby",
    "Foods",
    "Reading room",
  ];
  // all parts of speech and word category array end

  const handlePartOfSpeechChange = (event) => {
    setSelectedPartOfSpeech(event.target.value);
  };
  const handleCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  const onSubmit = (data) => {
    const processedData = {
      userName: user[0].name,
      userEmail: user[0].email,
      category: data.category,
      word: data.word,
      meaning: {
        originalBangla: [data.bdMeaning],
      },
      definition: data.definition,
      phonetics: data.phonetics,
      partsOfSpeech: data.partsOfSpeech,
      synonyms: [data["synonym 1"], data["synonym 2"], data["synonym 3"]],
      antonyms: [data["antonym 1"], data["antonym 2"], data["antonym 3"]],
      examples: [data["example 1"], data["example 2"], data["example 3"]],
    };

    console.log(processedData);

    fetch("https://vocab-master-server-new.vercel.app/user/wordrequest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(processedData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire("Success!", "Toy added successfully!", "'success'");
        } else {
          Swal.fire("error!", "something went wrong.please try again", "error");
        }
      });
    reset();
  };

  return (
    <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 w-full h-full">
      <form className="mb-36 rounded" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-3xl sm:text-5xl block font-extrabold  text-center my-12 rounded ">
          Request to add word
        </h2>
        <div className="grid gap-6  md:grid-cols-2 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 shadow-md py-4 px-3  mx-6 rounded">
          {!wordExist ? (
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Word
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Word"
                {...register("word")}
                onKeyUp={checkWordExistence}
              />
            </div>
          ) : (
            <div>
              <label
                htmlFor="username-error"
                className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500"
              >
                Word
              </label>
              <input
                type="text"
                placeholder="Word"
                onKeyUp={checkWordExistence}
                className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
              />
              <p className="mt-2 text-sm text-yellow-600 dark:text-red-800">
                <span className="font-medium text-white">Oops!</span>This word
                already available
              </p>
            </div>
          )}

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Definition
            </label>
            <input
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              type="text"
              placeholder="definition"
              {...register("definition")}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Parts of Speech
            </label>
            <select
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={selectedPartOfSpeech}
              {...register("partsOfSpeech")}
              onChange={handlePartOfSpeechChange}
            >
              <option value="" disabled>
                Select a Parts of Speech
              </option>
              {allPartsOfSpeech.map((partOfSpeech) => (
                <option key={partOfSpeech} value={partOfSpeech}>
                  {partOfSpeech}
                </option>
              ))}
            </select>
            <div>
              <strong>Selected Part of Speech:</strong> {selectedPartOfSpeech}
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Word Category
            </label>
            <select
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={selectedCategory}
              {...register("category")}
              onChange={handleCategory}
            >
              <option value="" disabled>
                Select a Category
              </option>
              {allCategory.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <div>
              <strong>Selected Category:</strong> {selectedCategory}
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Synonyms('give at least two words')
            </label>
            <input
              required
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Synonym 1"
              {...register("synonym 1")}
            />
            <input
              required
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2"
              placeholder="Synonym 2"
              {...register("synonym 2")}
            />
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2"
              placeholder="Synonym 3"
              {...register("synonym 3")}
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Antonyms('give at least two words')
            </label>
            <input
              required
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Antonym 1"
              {...register("antonym 1")}
            />
            <input
              required
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2"
              placeholder="Antonym 2"
              {...register("antonym 2")}
            />
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2"
              placeholder="Antonym 3"
              {...register("antonym 3")}
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Examples('give at least two Examples')
            </label>
            <input
              required
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Examples 1"
              {...register("example 1")}
            />
            <input
              required
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2"
              placeholder="Examples 2"
              {...register("example 2")}
            />
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2"
              placeholder="Examples 3"
              {...register("example 3")}
            />
          </div>
          <div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Phonetics
              </label>
              <input
                required
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Phonetics"
                {...register("phonetics")}
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 mt-4">
                Bangla Meaning
              </label>
              <input
                required
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Meaning"
                {...register("bdMeaning")}
              />
            </div>
          </div>
          <input
            className="btn bg-[#562387] text-white"
            type="submit"
            value="submit"
            disabled={wordExist}
          />
          <h2 className=" font-primary mb-4 lg:mb-0 text-3xl bg-clip-text text-transparent bg-gradient-to-br from-blue-500 via-[#F9FAFB] to-[#562387] mx-auto">
            𝓣𝓱𝓪𝓷𝓴𝓼 𝓯𝓸𝓻 𝔂𝓸𝓾 𝓬𝓸𝓷𝓽𝓻𝓲𝓫𝓾𝓽𝓲𝓸𝓷
          </h2>
        </div>
      </form>
    </div>
  );
};

export default WordRequest;
