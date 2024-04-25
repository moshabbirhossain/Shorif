import React from 'react';

const Result = () => {
    return (
        <div style={{ overflow: "hidden" }}>
        <h1 className="text-2xl font-bold mb-3">Add Teachers</h1>
        <form className="border p-5 rounded">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
            <label htmlFor="Upload Result" className="md:col-span-1">
              Uplaod Result
              <Input type="file" id="name" placeholder="Upload Result"required/>
            </label>
            <button>Genetate</button>
          </div>
        </form>
      </div> 
    );
};

export default Result;