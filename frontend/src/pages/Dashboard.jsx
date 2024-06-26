
import {useEffect} from 'react'
import {useNavigage} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import GoalForm from '../components/GoalForm'
import GoalItem from '../components/Goalitem'
import Spinner from '../components/Spinner'
import {getGoals, reset}from '../features/goals/goals/goalService'

function Dashboard() {
  const navigage = useNavigage()
  const dispatch = useDispatch()
  

  const {user} = useSelector((state) => state.auth)
  const {goals, isLoading, isError, message} = useSelector((state)=>state.goals)

  useEffect(()=> {
    if(isError){
      console.log(message)
    }


    if(!user){
      navigage('/login')
    }
    dispatch(getGoals())

    return()=>{
      dispatch(reset())
    }


  },[user, navigage])

  if(isLoading){
    return <Spinner/>
  }

  return <>
          <section className="heading">
            <h1>Welcom{user && user.name}</h1>
            <p>Goals Dashboard</p>
          </section>
          <GoalForm/>
          <section className="content">
            {goals.length>0 ? (<div className='goals' >
                {goals.map((goal) =>(
                  <GoalItem key={goal._id} goal={goal} />
                ))}

            </div>):(<h3> You have not set any gaols</h3>)}
          </section>
  
  
       </>
 
}

export default Dashboard