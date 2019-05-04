import { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = resource => {
  const [resources, setResources] = useState([]);

  // We use resource in [], coming from props
  // in order to have the arrow function called.
  // The first time [resource] === 'posts' and then
  // [resource] === 'todos' (changed) so re-render.
  useEffect(() => {
    // Immediately-invoked function
    (async resource => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
      
      setResources(response.data);
    })(resource);
  }, [resource]); // Only re-run the effect if resource changes

  return resources;
}

export default useResources;