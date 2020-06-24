export interface result { 
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}


interface calculateExerciseValues {
    value1: Array<number>;
    value2: number;
  }

const parseArguments = (args: Array<string>) : calculateExerciseValues => {

    let days : any = args.slice(2,args.length-1)
    console.log(days)

    days.forEach((day: any,index: string | number) => {
        if(!isNaN(Number(day))){
            days[index]=Number(day);
        } else{
            throw new Error('Provided values were not numbers!:'+day);
        }
    })

    if (!isNaN(Number(args[args.length-1]))) {
        return {
          value1: days,
          value2: Number(args[args.length-1])
        }
      } else {
        throw new Error('Provided values were not numbers!');
    }
}

const calculateExercises = (hours : Array<number>, target : number) =>{
    let sum=0;
    let trainingDays=0;

    hours.forEach(hour=> {
        if(hour>0){
            trainingDays+=1
        }
        if(!isNaN(hour)){
            sum+=hour
        }
    });

    const average=sum/hours.length
    const success=average > target
    const rating=average >= target? 3:average>=target*2/3? 2:1
    const ratingDescription=rating === 3? 'cool keep going' : rating ===2? 'not too bad but could be better':'are you even trying?'

    const result : result ={
        periodLength:hours.length,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average
    }

    console.log(result)
}

try {
    const { value1, value2 } = parseArguments(process.argv);
    calculateExercises(value1, value2);
  } catch (e) {
    console.log('Error, something bad happened, message: ', e.message);
  }