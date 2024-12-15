import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const {_id,title,company,deadline} = useLoaderData();
    
    return (
        <div className='m-10'>
            <h2 className='text-3xl'>job details:{title}</h2>
            <p>apply for:{company}</p>
            <p>Deadline:{deadline}</p>
            <Link to={`/jobApply/${_id}`}>
            <button className='btn'>Apply Now</button>
            </Link>
        </div>
    );
};

export default JobDetails;