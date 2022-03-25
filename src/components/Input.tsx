interface InputProps {
    text: String;
    type: 'text' | 'number';
    value: any;
    readOnly?: boolean;
    onChange?: (value: any) => void;

    className?: string;
}

export default function Input(props: InputProps) {
    return (
        <div className={`flex flex-col ${props.className ?? ''}`}>
            <label className="mb-2" htmlFor="">{props.text}</label>

            <input className={`border border-purple-500 rounded-lg bg-gray-100 px-4 py-2 
                                focus:outline-none ${props.readOnly ? '' : 'focus:bg-white'}`}
                type={props.type} value={props.value} readOnly={props.readOnly} onChange={e=> props.onChange?.(e.target.value)}
            />
        </div>
    );
}