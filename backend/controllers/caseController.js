const Case = require('../models/case.model.js');


const addNewCase = async (req, res) => {
    try {
        const { caseName } = req.body;

    const newCase = new Case({
        caseName
    });

    await newCase.save();
    res.status(200).json({sucesss:true, message:"New Case added Successfully"})
    } catch (error) {
        res.status(500).json({success:false, message:"Internal server error"})
    }

}

const getCases = async (req, res) => {
    try {
        
        const cases = await Case.find();
        if(!cases){
            return res.status(400).json({message:"No case found in the database"});
        }

        return res.status(200).json({cases});

    } catch (error) {
        return res.status(500).json({message:"Internal server error"});
    }
};

const getCase = async (req, res) => {
    try {
        const caseId = req.params.id;

        const foundCase = await Case.findById(caseId);

        if (!foundCase) {
            return res.status(404).json({ message: "Case with provided ID not found" });
        }

        return res.status(200).json({ case: foundCase });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

const deleteCase = async (req, res) => {
    try {
        const caseId = req.params.id;

        const deletedCase = await Case.findByIdAndDelete(caseId);

        if (!deletedCase) {
            return res.status(400).json({success:false, message:"Case trying to be deleted not found"});
        }

        return res.status(200).json({success:true, message:"Case deleted successfully"})

    } catch (error) {
        return res.status(500).json({message:"Internal server error"})
    }
}

module.exports = {addNewCase, getCases, getCase, deleteCase};
