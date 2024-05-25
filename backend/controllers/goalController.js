const asyncHandler = require('express-async-handler')
//111111111111111111111111
//@desc  Get goals
//@route  GET /api/goals
//@access Private

const getGoals = async(req, res) => {
    res.status(200).json({message:'Get goal'})
}


//222222222222222222222222222
//@desc  Set goals
//@route  POST /api/goals
//@access Private

const setGoal = async(req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({message:"Set goal"})


}



//3333333333333333333333333333
//@desc  update goals
//@route  PUT /api/goals/:id
//@access Private

const updateGoal = async(req, res) => {
    res.status(200).json({message:`Update goals ${req.params.id}`})
}





//444444444444444444444444444
//@desc  Delete goals
//@route  DELETE /api/goals/:id
//@access Private

const deleteGoal = async(req, res) => {
    res.status(200).json({message:`Delete goal ${req.params.id}`})
}


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal

}
