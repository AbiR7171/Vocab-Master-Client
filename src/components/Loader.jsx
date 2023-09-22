import { Dna } from 'react-loader-spinner'

const Loader = () => {

    return (
        <div className='flex justify-center mt-40'>
            <Dna
                visible={true}
                height="100"
                width="100"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
        </div>
    );
};

export default Loader;