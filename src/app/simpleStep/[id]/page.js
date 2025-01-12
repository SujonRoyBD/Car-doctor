import Image from 'next/image';
import React from 'react';
const data = [
    {
        id: 1,
        img: "/aseats/red.png",
        title: "Step One",
        desc: "It uses a dictionary.",
        data: "of over 200"
    },
    {
        id: 2,
        img: "/aseats/red.png",
        title: "Step One",
        desc: "It uses a dictionary .",
        data: "of over 200"
    },
    {
        id: 3,
        img: "/aseats/red.png",
        title: "Step One",
        desc: "It uses a dictionary  .",
        data: "of over 200"
    }
];

const page = ({ params }) => {
    const id = params.id;
    const filterData = data?.filter((info) => info?.id === parseInt(id))
    // console.log(filterData)
    return (
        <div>
            <div className='mt-9'>
                {
                    filterData?.map((data, index) => {
                        return <div key={index}>
                            <Image src={data?.img} alt='image' width={500} height={300} className="w-2/4 h-[400px]" />
                            <h3>{data?.title}</h3>
                            <p><strong>Price : </strong>{data?.price}</p>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default page;

//Ay pager folder er sathe button a link up korte hobe//