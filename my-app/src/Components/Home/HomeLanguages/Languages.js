import React from "react";
import Language from "./Language";

export default function Languages() {
  return (
    <div className="container-fluid">
      <div className="d-flex flex-row justify-content-between flex-wrap ">
        <Language
          src="./Images/java.png"
          alt="language1"
          title="Java"
          description="Programming is the process of creating a set of instructions that tell a computer how to perform a task. Programming can be done using a variety of computer programming languages, such as JavaScript, Python, and C++."
          color="rgb(6,118,190)"
        />
        <Language
          src="./Images/javascript.png"
          alt="language1"
          title="JavaScript"
          description="Programming is the process of creating a set of instructions that tell a computer how to perform a task. Programming can be done using a variety of computer programming languages, such as JavaScript, Python, and C++."
          color="rgb(240,219,79)"
        />
        <Language
          src="./Images/cakephp.png"
          alt="language1"
          title="CakePHP"
          description="Programming is the process of creating a set of instructions that tell a computer how to perform a task. Programming can be done using a variety of computer programming languages, such as JavaScript, Python, and C++."
          color="rgb(212,61,68)"
        />
        <Language
          src="./Images/django.png"
          alt="language1"
          title="Django"
          description="Programming is the process of creating a set of instructions that tell a computer how to perform a task. Programming can be done using a variety of computer programming languages, such as JavaScript, Python, and C++."
          color="white"
        />
        <Language
          src="./Images/mysql.png"
          alt="language1"
          title="MySQL"
          description="Programming is the process of creating a set of instructions that tell a computer how to perform a task. Programming can be done using a variety of computer programming languages, such as JavaScript, Python, and C++."
          color="rgb(237,157,24)"
        />
        <Language
          src="./Images/bootstrap.png"
          alt="language1"
          title="Bootstrap"
          description="Programming is the process of creating a set of instructions that tell a computer how to perform a task. Programming can be done using a variety of computer programming languages, such as JavaScript, Python, and C++."
          color="rgb(91,66,130)"
        />
        <Language
          src="./Images/html-5.png"
          alt="language1"
          title="HTML-5"
          description="Programming is the process of creating a set of instructions that tell a computer how to perform a task. Programming can be done using a variety of computer programming languages, such as JavaScript, Python, and C++."
          color="rgb(228,77,38)"
        />
        <Language
          src="./Images/css3.png"
          alt="language1"
          title="CSS-3"
          description="Programming is the process of creating a set of instructions that tell a computer how to perform a task. Programming can be done using a variety of computer programming languages, such as JavaScript, Python, and C++."
          color="rgb(21,114,182)"
        />
      </div>
    </div>
  );
}
