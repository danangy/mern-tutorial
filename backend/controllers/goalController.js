// @desc    get goals
// @route   POST /api/goals
// @access  Private
const getGoals = (req,res) => {
    res.status(200).json({message: 'Get Goals controller'})
}

// @desc    Set goals
// @route   POST /api/goals
// @access  Private
const setGoal = (req,res) => {
    res.status(200).json({message: 'Set Goals controller'})
}

// @desc    Update goals
// @route   Put /api/goals/:id
// @access  Private
const updateGoal = (req,res) => {
    res.status(200).json({message: `Update Goal controller ${req.params.id}`})
}

// @desc    Delete goals
// @route   Delete /api/goals/:id
// @access  Private
const deleteGoal = (req,res) => {
    res.status(200).json({message: `Delete Goal controller ${req.params.id}`})
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
    
}
