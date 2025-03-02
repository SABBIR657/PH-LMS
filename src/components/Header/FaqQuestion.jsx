import { Accordion, AccordionItem, Button } from "@heroui/react";
import { FaQuestionCircle } from "react-icons/fa"; // For the icon

export default function FaqQuestion() {
    const defaultContent =
        "বরং AI ওয়েব ডেভেলপারদের চাহিদা বাড়াবে। কারণ AI ইউজ হয় এমন ওয়েব সাইট আর এপ্লিকেশন এর চাহিদা বাড়বে এবং বর্তমানে যেসব ওয়েবসাইট আছে সেগুলতে AI সিস্টেম যোগ করার দরকার পড়বে। তাছাড়া তুমি যে chatGPT, Gemni এর মতো AI ইউজ করতেছো সেটা কিন্তু ওয়েবসাইট এ গিয়েই ইউজ করতেছো। তাই AI ওয়েব ডেভেলপারদের ডিমান্ড কমাবে না বরং বাড়াবে।";

    return (
        <div className="min-h-screen bg-[#1488d8] flex flex-col items-center justify-center px-4 py-8">
            <div className="flex justify-center items-center ">
                <div>
                    <h1 className="text-5xl font-semibold mb-6">FAQ_</h1>
                </div>
                <div className="ml-10">
                    <Accordion isCompact className="w-full max-w-4xl space-y-4">
                        <AccordionItem key="1" aria-label="AI ওয়েব ডেভেলপারদের চাকরি খেয়ে দিবে?" title="AI ওয়েব ডেভেলপারদের চাকরি খেয়ে দিবে?">
                            <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                                <div className="flex-1">
                                    <p className="text-gray-700">{defaultContent}</p>
                                </div>
                                <div className="ml-4 flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full text-white">
                                    <FaQuestionCircle className="text-2xl" />
                                </div>
                            </div>
                        </AccordionItem>

                        <AccordionItem key="2" aria-label="নন-সিএসই বা নন-সায়েন্স ব্যাকগ্রাউন্ডের শিক্ষার্থীরা কি ওয়েব ডেভেলপমেন্টে চাকরি বা ইন্টার্নশিপ পাবে?" title="নন-সিএসই বা নন-সায়েন্স ব্যাকগ্রাউন্ডের শিক্ষার্থীরা কি ওয়েব ডেভেলপমেন্টে চাকরি বা ইন্টার্নশিপ পাবে?">
                            <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                                <div className="flex-1">
                                    <p className="text-gray-700">{defaultContent}</p>
                                </div>
                                <div className="ml-4 flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full text-white">
                                    <FaQuestionCircle className="text-2xl" />
                                </div>
                            </div>
                        </AccordionItem>

                        <AccordionItem key="3" aria-label="স্টুডেন্ট থাকা অবস্থায় পড়াশোনার পাশাপাশি চাকরি/ইন্টার্নশিপ করতে পারব?" title="স্টুডেন্ট থাকা অবস্থায় পড়াশোনার পাশাপাশি চাকরি/ইন্টার্নশিপ করতে পারব?">
                            <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                                <div className="flex-1">
                                    <p className="text-gray-700">{defaultContent}</p>
                                </div>
                                <div className="ml-4 flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full text-white">
                                    <FaQuestionCircle className="text-2xl" />
                                </div>
                            </div>
                        </AccordionItem>

                        <AccordionItem key="4" aria-label="আপনারা কীভাবে একটি চাকরি/ইন্টার্নশিপের গ্যারান্টি দিতে পারেন?" title="আপনারা কীভাবে একটি চাকরি/ইন্টার্নশিপের গ্যারান্টি দিতে পারেন?">
                            <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                                <div className="flex-1">
                                    <p className="text-gray-700">{defaultContent}</p>
                                </div>
                                <div className="ml-4 flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full text-white">
                                    <FaQuestionCircle className="text-2xl" />
                                </div>
                            </div>
                        </AccordionItem>

                        <AccordionItem key="5" aria-label="আমি কি পড়ালেখা ও পরীক্ষার পাশাপাশি এই কোর্স শেষ করতে পারব?" title="আমি কি পড়ালেখা ও পরীক্ষার পাশাপাশি এই কোর্স শেষ করতে পারব?">
                            <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                                <div className="flex-1">
                                    <p className="text-gray-700">{defaultContent}</p>
                                </div>
                                <div className="ml-4 flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full text-white">
                                    <FaQuestionCircle className="text-2xl" />
                                </div>
                            </div>
                        </AccordionItem>

                        <AccordionItem key="6" aria-label="এই কোর্স কাদের জন্য?" title="এই কোর্স কাদের জন্য?">
                            <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                                <div className="flex-1">
                                    <p className="text-gray-700">{defaultContent}</p>
                                </div>
                                <div className="ml-4 flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full text-white">
                                    <FaQuestionCircle className="text-2xl" />
                                </div>
                            </div>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
            <Button color="white" variant="bordered" style={{ borderColor: 'white' }}>
                আরো দেখুন
            </Button>

        </div>
    );
}
