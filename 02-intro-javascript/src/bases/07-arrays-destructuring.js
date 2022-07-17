const saiyans = ['Goku', 'Vegeta', 'Trunks'];

const [, , trunks] = saiyans;
console.log(trunks);

const arrayReturn = () => ['ABC', 123];

const [ letters, numbers ] = arrayReturn();
console.log({letters, numbers});

//* TASK
//* 1. The name of the first position of the array is name
//* 2. The name of the second position of the array is setName
const useState = ( value ) => {
    return [ value, () =>  console.log('Hello world!')  ];
}


const [name, setName] = useState('Goku');
console.log(name);
setName();

