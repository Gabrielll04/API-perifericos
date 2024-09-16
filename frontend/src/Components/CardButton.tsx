import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineRocketLaunch, MdOutlineAccountCircle  } from 'react-icons/md';


function CardButton({ to, title, description, icon }) {
  const icons = {
    rocket: <MdOutlineRocketLaunch className="w-8 h-8" />,
    account: <MdOutlineAccountCircle className="w-8 h-8"/>
  };

  const IconComponent = icons[icon] || null;

  return (
    <Link to={to} className="flex w-96 gap-2 p-2 border-2 border-zinc-700 rounded-lg hover:bg-zinc-700 transition">
      {IconComponent && <div className="flex w-14 rounded bg-green-400 items-center justify-center text-green-700 border border-green-700">{IconComponent}</div>} 
      <div className="gap-0">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-zinc-500">{description}</p>
      </div>
    </Link>
  );
}

export default CardButton;
