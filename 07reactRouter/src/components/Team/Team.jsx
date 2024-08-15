import React from "react"
import Card1 from "./Card1"
import Card3 from "./Card3"
import Card2 from "./Card2"
import Card4 from "./Card4"
import './Team.css'



export default function Team(){
    return(
        <>
            <div className="flex-col py-10 bg-purple-50 bg-[url('\src\assets\svgs\b58072b9-9ab9-4f4e-afaf-9cdb524b46a3.jpg')]">
            <h1 className="text-center text-5xl font-extrabold   ">OUR TEAM</h1>
            <div>
            <h2 className="text-center text-3xl mt-4">Overall Coordinators</h2>
            <div className=" grid items-center sm:grid-cols-3  px-11 grid-cols-1   mt-10 gap-x-8 gap-y-6">
               <Card1/>
               <Card1/>
               <Card1/>
               
            </div>
            </div>

            <div className=" text-center my-8">
            <h2  className=" text-center text-3xl my-4">Head Coordinators</h2>
             <div className="size-70   grid items-center sm:grid-cols-5  px-11 grid-cols-1 gap-2">
                <Card2/>
                <Card2/>
                <Card2/>
                <Card2/>
                <Card2/>
             </div>
            </div>

            <div className="text-center">
              <h2 className=" text-center text-3xl mt-4">Web Team</h2>
              <div className=" grid items-center sm:grid-cols-3  px-11 grid-cols-1 gap-2" >
                <Card3 username="Shubham Thakhur" insta="https://www.instagram.com/shhubhm_/" />
                <Card3 username="Sanju Rohilla" insta="https://www.instagram.com/sanjurohilla27"/>
                <Card3 username="Rishabh Chandrakar" insta="https://www.instagram.com/rishabh.chandrakar_/"/>
              </div>
            </div>

            {/* <div className="bg-black  grid items-center sm:grid-cols-3 grid-cols-1 gap-2"> */}
             
             <div className=" flex flex-col gap-10  mt-10 justify-evenly sm:flex-row sm:gap-10">
             <div className="flex flex-col gap-8 bg-transparent  p-10 m-10 rounded-3xl shadow-2xl  ">
              <div className="text-center"><b>4th Year</b></div>
              <Card4 name="Abhinesh Sharma" domain="Web Team"/>
              <Card4 name="Akshay Jain" domain="Web Team"/>
              <Card4 name= "Abhishek Malik" domain="Documentation"/>
              <Card4 name="Shekhar Choudhry" domain= "Documentation"/>
              <Card4 name="Deepak" domain="Documentation" />
              <Card4 name="Deepak Tiwari" domain="Documentation" />
              <Card4 name="Akash Sharma" domain="Management"/>
              <Card4 name="Aaryan Pareek" domain="Management" />
              <Card4 name="Aayush Kumar" domain="Management"/>
              <Card4 name= "Aayush Prajapati" domain ="Management"/>
              <Card4 name="Gokul Prasad" domain="Management"/>
              <Card4 name="Karan Sharma" domain="Management" />
              <Card4 name="Arpit Dwiwedi" domain="Publicity"/>
              <Card4 name = "Piyush Kumar" domain="Publicity"/>
              <Card4 name= "Rupesh Singh" domain="Publicity"/>
              <Card4 name="Lisha Sinha"domain="Publicity"/>
              <Card4 name="Sumran Kumar" domain ="Publicity"/>
              <Card4 name="Abhay Raj Singh" domain="Design"/>
              <Card4 name="Pushpendar Choudhry" domain="Design" />
             </div>
             
            <div className="flex flex-col  gap-8 bg-transparent m-10 p-10 rounded-3xl shadow-2xl">
            <div className="text-center"><b>3rd Year</b></div>
              <Card4 name="Hitesh Verma" domain="Web Team"/>
              <Card4 name="Diptesh Raj" domain="Web Team"/>
              <Card4 name="Priyanshu Chandra" domain="Web Team"/>
              <Card4 name="Humanshu Sahu" domain="Documentation"/>
              <Card4 name="Avish Srivastava" domain="Documentation"/>
              <Card4 name="Aayushi Vishvkarma" domain="Documentation"/>
              <Card4 name="Lakshay Jain" domain="Documentation" />
              <Card4 name="Neha Dewangan" domain="Documentation"/>
              <Card4 name="Priyanshu" domain="Documentation"/>
              <Card4 name="Anshika Aarshi" domain="Management"/>
              <Card4 name="Humanshu Rajput" domain="Management"/>
              <Card4 name="Hinesh Singh Thakhur" domain="Management"/>
              <Card4 name="Priyanshu Kumar" domain="Management"/>
              <Card4 name="Aashish Shukla" domain ="Management"/>
              <Card4 name="Devid Kumar" domain="Manament"/>
              <Card4 name="Navneet Gupta" domain="Management"/>
              <Card4 name="Sagar Goswami" domain="Management"/>
              <Card4 name="Vaibhav Singh" domain="Management"/>
              <Card4  name="Sachin Choubay" domain="Management"/>
              <Card4 name="Yugesh" doamin="Management" />
              <Card4 name="Aadi Varshney" doamin="Publicity"/>
              <Card4 name="Abhishek Kumar" domain="Publicity"/>
              <Card4 name="Pranjal Sharma" domain="Publicity"/>
              <Card4 name="Mansi Gupta" domain="Publicity"/>
              <Card4 name="Samriddhi Kharay" domain="Publicity"/>
              <Card4 name="Aaditya Jamne" domain ="Design"/>
              <Card4 name="Manish Kumar Sahu" domain="Design"/>
              <Card4 name="Kalyani Chandrakar" domain="Design"/>
              <Card4 name="Khumesh Sonkar" domain="design"/>
              <Card4 name="Ravisha  Anant" doamin="Design"/>
            </div>
            <div className="flex flex-col gap-8 bg-transparent m-10 p-10 rounded-3xl shadow-2xl">
            <div className="text-center"><b>2nd Year</b></div>
             <Card4 name="Shubham Thakhur" domain="Web Team"/>
              <Card4 name="Rishabh Chandrakar" domain="Web Team"/>
              <Card4 name="Sanju Rohilla" domain="Web Team"/>
              <Card4 name="Abhishek Kumar Singh"domain="Management"/>
              <Card4 name="Amit Kumar"  domain="Documentation"/>
              <Card4 name="Aayush Kumar Mishra" domain="Documentation"/>
              <Card4 name="Dhanesh Kumar" domain ="Management"/>
              <Card4 name="Sisodhiya" domain="Documentation"/>
              <Card4 name="Ipshita Shukla" domain="Documentation"/>
              <Card4 name="Isita Tiwari" domain="Milind Kumawat"/>
              <Card4 name="Nityanand Shukla" domain="Design"/>
              <Card4 name="Raj Singh" domain="Management"/>
              <Card4 name="Savita Singhal" domain="Management"/>
            </div>
            </div>
            
            </div>
        </>
    )
}