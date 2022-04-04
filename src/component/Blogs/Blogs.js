import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container text-black blogs-part py-5 my-5'>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            #1 What is context API?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>CONTEXT API</strong> হল এক ধরণের গ্লোবাল ভেরিয়েবল । যা props drilling এর পরিবর্তে ব্যাবহার হয় । এটি props drilling  এর মত উপর থেকে নিচের দিকে ধাপে ধাপে props আকারে না গিয়ে context api এর মাধ্যমে parent component থেকে সরাসরি child component এ কাজ করে । এর ক্ষেত্রে এটির মাঝে একাধিক component থাকলেও তাতে কোন পরিবর্তন আসে নাহ । 
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            #2 What is Semantic tag?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Semantic tag</strong> হল একটি ওয়েবসাইট এর মুল কাঠামো । যার প্রতিটি বিভক্তিকে আলাদা আলাদা tag এর মাধ্যমে তার কাজ বা অবস্থান সম্পরকে অবহিত করে । এটির প্রতিটি Tag দ্বারা এটির প্রতিটি বিভক্তির পরিচয় পাওয়া যায় । যার দ্বারা একটি ওয়েবসাইট কে আর seo এর জন্য আলাদা কাজ করার ততটা প্রয়োজন হয় নাহ । 
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            #3 What is inline, block $ inline-block?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <li><strong>Inline tag</strong> বলা হয় একটি লাইনে কোন Tag ব্যাবহারের পর যদি সে তার প্রয়োজন অনুযায়ী জায়গা নিয়ে বাকী জায়গা ছেড়ে দেয় । </li>
                            <li><strong>Block tag</strong>বলা হয় একটি লাইনে কোন Tag ব্যাবহারের পর যদি সে তার প্রয়োজনীয় জায়গা নেওয়ার পর বাকী জায়গা নিয়ে নেয় । </li>
                            <li><strong>Inline-Block</strong> বলা হয় কোন স্থানে কোন tag ব্যাবহারের পর তার hight width আলাদা ভাবে সেট করাকে।</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;