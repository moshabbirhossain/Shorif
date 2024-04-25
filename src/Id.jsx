import React from 'react';
import { Input } from './components/ui/input';

const Id = () => {
    return (
        <div style={{ overflow: "hidden" }}>
        <h1 className="text-2xl font-bold mb-3">ID Card Generate</h1>
        <form className="border p-5 rounded">
          <div className="mt-3">
            <label htmlFor=" ID Card" className="md:col-span-1">
             ID Number
              <Input type="number" id="IdNumber" placeholder="ID Number"required/>
            </label>
            
          </div>
        </form>
      </div> 
    );
};

export default Id;