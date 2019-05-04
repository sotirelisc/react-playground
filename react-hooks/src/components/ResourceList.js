import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
    
    setResources(response.data);
  }

  // We use resource in [], coming from props
  // in order to have the arrow function called.
  // The first time [resource] === 'posts' and then
  // [resource] === 'todos' (changed) so re-render
  useEffect(() => {
    fetchResource(resource);
  }, [resource]); // Only re-run the effect if resource changes

  return (
    <div>{resources.length}</div>
  );
}

export default ResourceList;