import React from 'react'

const MyTopLeads = () => {
    const leads = [ 'K MADHU SUDHAM ',  'AARYA SHARMA', 'SAMEER KHADE'];
  
  
  return (
    <div className="my-top-leads">
        <h2>My Top Leads</h2>
        <ul>
            {leads.map((leads, index) => (
                <li key={index}>{leads}</li>
            ))}
        </ul>
    </div>
  );
};

export default MyTopLeads;