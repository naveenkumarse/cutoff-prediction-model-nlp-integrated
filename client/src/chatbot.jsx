import { useState } from "react";
import ChatBody from "./components/ChatBody";
import ChatInput from "./components/ChatInput";
import { useMutation } from "react-query";
import { fetchResponse } from "./api";
import { Button } from "@material-tailwind/react";
import { Outlet, Link } from "react-router-dom";



function ChatBot() {
  const [chat, setChat] = useState([]);

  const mutation = useMutation({
    mutationFn: (message) => {
      // console.log("asdf", "mutationFn");
      return fetchResponse(chat[chat.length - 1].message);
    },
    onSuccess: (data) => {
      // console.log("asdf", data);
      setChat((prev) => [
        ...prev,
        { sender: "ai", message: data.replace(/^\n\n/, "") },
      ]);
    },
  });

  const sendMessage = async (message) => {
    await Promise.resolve(setChat((prev) => [...prev, message]));
    mutation.mutate(message);
  };
  const predictHandler = () => {
    window.location = '/predict-cutoff';
  }
  return (
    <div className="bg-[#1A232E] h-screen py-6 relative sm:px-16 px-12 text-white overflow-hidden flex flex-col justify-between  align-middle">
      <div className="gradient-01 z-0 absolute"></div>
      <div className="gradient-02 z-0 absolute"></div>

      <div className="uppercase font-bold  text-2xl text-center mb-3">
        KEC Chatbot
      </div>

      <div
        className="h-[90%] overflow-auto w-full max-w-4xl min-w-[20rem] py-8 px-4 self-center
      scrollbar-thumb-slate-400 scrollbar-thin scrollbar-track-gray-tranparent scrollbar-thumb-rounded-md
      "
      >
        <ChatBody chat={chat} />
      </div>

      <div className="w-full max-w-4xl min-w-[20rem] self-center">
        <Link to="/predictCutoff"> <Button variant="text text-white" >Predict cutoff</Button></Link>
        <ChatInput sendMessage={sendMessage} loading={mutation.isLoading} />
      </div>
    </div>

  );
}

export default ChatBot;
