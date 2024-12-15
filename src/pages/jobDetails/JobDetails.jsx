import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const {title,company,deadline} = useLoaderData();
    
    return (
        <div className='m-10'>
            <h2 className='text-3xl'>job details:{title}</h2>
            <p>apply for:{company}</p>
            <p>Deadline:{deadline}</p>
            <button className='btn'>Apply Now</button>
        </div>
    );
};

export default JobDetails;