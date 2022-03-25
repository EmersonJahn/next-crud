interface ButtonProps {
    color?: 'green' | 'blue' | 'gray' | 'red';
    className?: string;
    children: any;
}

export default function Button(props: ButtonProps) {
    const color = props.color ?? 'blue';

    return (
        <button className={`bg-${color}-600 text-white px-4 py-2 rounded-md ${props.className}`}>
            {props.children}
        </button>
    );
}