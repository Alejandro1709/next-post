function Form() {
  return (
    <form className='flex shadow-lg border'>
      <input
        className='p-2 flex-1 outline-none'
        type='text'
        placeholder='What are you thinking???'
      />
      <button className='p-2 px-4 bg-blue-500 hover:bg-blue-600 text-white'>
        Share
      </button>
    </form>
  );
}

export default Form;
