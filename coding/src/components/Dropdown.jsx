import React,{useState,useRef,useEffect} from 'react';
import './Dropdown.css'; // Assuming you have a CSS file for styling

const Dropdown = ()=>{
const [isOpen, setIsOpen] = useState(false);
const dropdownRef = useRef(null)

const toggleDropdown = () =>{
    setIsOpen(!isOpen);
}

useEffect(()=>{

  const handleClickOutside = (event) =>{

    if(dropdownRef.current && !dropdownRef.current.contains(event.target))
    {
        setIsOpen(false);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  return()=>{
    document.removeEventListener('mousedown', handleClickOutside);
  }
},[]);  

    return (
        <div className="dropdown" ref={dropdownRef}>
            <button className="dropdown-button" onClick={toggleDropdown}>Menu</button>

            {isOpen && (
                 <div className="dropdown-content">
                <a href="#">Home</a>
                <a href="#">contact us</a>
                <a href="#">About Us</a>
            </div>
            )}
         
        </div>
    );
}

export default Dropdown;