class Question {
    constructor() {
    this.input1 = createInput("Name");
    this.input2 = createInput("enter your correct option");
    this.button = createButton('submit');
    
    this.title = createElement('h2')
  }
  hide(){
    
    this.button.hide();
    this.input1.hide();
    this.input2.hide();
    this.title.hide();
  }

  display(){
    
    this.title.html("Anand swaroop's Quiz Game");
    this.title.position(350,0);
    
    this.question.html("Question:- What starts and end with the letter E, but has only one letter? ");
    this.question.position(150,80);
    this.option1.html("1: Everyone ");
    this.option1.position(150,100);
    this.option2.html("2: Envelope ");
    this.option2.position(150,120);

    this.input1.position(150,230);
    this.input1.position(150,270);
    this.mousePressed(()=>{
    this.title.html();
    this.button.hide();
    contestant.name = this.input1.value();
    contestantCount+=1;
    contestant.index = contestantCount;
    contestant.update();
    contestant.updateCount(contestantCount);
    });
  }
  }