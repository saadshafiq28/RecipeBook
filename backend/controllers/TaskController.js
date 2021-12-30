import Task from '../models/Task.js'

async function index(req, res) {
  let filter = {}

  // if (req.user.role !== 'admin') {
  //   filter.user = req.user._id
  // }

  try {
    const tasks = await Task.find(filter)
    res.json(tasks)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

async function show(req, res) {
  let filter = {
    _id: req.params.id,
  }

  // if (req.user.role !== 'admin') {
  //   filter.user = req.user._id
  // }

  try {
    const idea = await Task.find(filter)
    res.json(idea)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

async function store(req, res) {
  // if (req.user.role !== 'admin') {
  //   req.body.user = req.user._id
  // }


  try {
    const idea = await Task.create(req.body)
    res.json(idea)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

async function update(req, res) {
  let filter = {
    _id: req.params.id,
  }

  // if (req.user.role !== 'admin') {
  //   filter.user = req.user._id
  // }

  try {
    const idea = await Task.findOneAndUpdate(filter, req.body, {
      new: true,
      runValidators: true,
    })
    res.json(idea)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

async function destroy(req, res) {
  let filter = {
    _id: req.params.id,
  }

  // if (req.user.role !== 'admin') {
  //   filter.user = req.user._id
  // }

  try {
    await Task.findOneAndDelete(filter)
    res.json({ message: 'Idea deleted' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export default {
  index,
  show,
  store,
  update,
  destroy,
}
