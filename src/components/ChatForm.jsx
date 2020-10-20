import React, { useState } from 'react';

function ChatForm({ handleSubmit }) {
  const [value, setValue] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(value);
    setValue('');
  };

  const onChange = (e) => setValue(e.target.value);

  return (
    <form className="w-full" {...{ onSubmit }}>
      <input
        className="w-full rounded p-3 bg-gray-200"
        type="text"
        placeholder="Enter message..."
        {...{ value, onChange }}
      />
    </form>
  );
}

export default ChatForm;
