import React from 'react';
import { Input } from './components/ui/input';

const Notice = () => {
    return (
        <div style={{ overflow: "hidden" }}>
        <h1 className="text-2xl font-bold mb-3">ID Card Generate</h1>
        <form className="border p-5 rounded">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <label htmlFor=" ID Card" className="md:col-span-1">
             ID Number
              <Input type="number" id="IdNumber" placeholder="ID Number"required/>
            </label>
            <button>Genetate</button>
          </div>
        </form>
      </div> 
    );
};

export default Notice;