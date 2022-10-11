import React from 'react';

export default ({ color = '#E8F2F8', width = '584', height = '658', className = null }) => (
    <svg className={className} width={width} height={height} viewBox="0 0 584 658" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
            d="M583.124 473.355V184.427C583.124 170.15 575.465 156.96 563.053 149.822L311.64 5.36481C299.229 -1.78827 283.91 -1.78827 271.484 5.36481L20.0853 149.822C7.65928 156.96 0 170.15 0 184.427V473.355C0 487.632 7.65928 500.822 20.0853 507.96L271.484 652.417C283.91 659.57 299.229 659.57 311.64 652.417L563.053 507.96C575.465 500.822 583.124 487.632 583.124 473.355Z" 
            fill={color} 
        />
    </svg>
);
