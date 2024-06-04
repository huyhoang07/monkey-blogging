import React from 'react';
import { useController } from 'react-hook-form';

const Radio = ({control, children, name, checked, ...rest}) => {
    const { field } = useController({
        control,
        name,
        defaultValue: '',
    })
    return (
        <label>
            <input
                checked={checked}
                type='radio'
                className='hidden-input'
                {...field}
                {...rest}
            />
            <div className='flex items-center justify-center font-medium cursor-pointer gap-x-3'>
                <div
                    className={`w-7 h-7 rounded-full ${
                        checked ? "bg-green-400" : "bg-gray-200"}`}
                >
                </div>
                <span>{children}</span>
            </div>
        </label>
    );
};

export default Radio;