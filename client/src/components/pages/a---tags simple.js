import React, { Component } from 'react'
 
class about extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             skills: ["Type What You Need And Press Enter"]
        }
        this.inputRef = React.createRef()
    }

    // remove skill
    removeSkill = i => {
        const skills = this.state.skills
        skills.splice(i, 1)
        this.setState({
            skills: skills
        })
    }

    // add skill
    addSkill = e => {
        const skills = this.state.skills
        const value = e.target.value
        if(e.key === "Enter" && value){
            // check if duplicate skill
            if(skills.find(skill => skill.toLowerCase() === value.toLowerCase())){
                return alert("No duplicate value allowed")
            }
            // else add skill to skills array
            skills.push(value)
            // set new state
            this.setState({
                skills
            })
            // when submit skill, set current input filed null
            this.inputRef.current.value = null
        } else if(e.key === "Backspace" && !value){
            // if no value and hit backspace we will remove previous skill
            this.removeSkill(skills.length - 1)
        }
    }
    

    render() {
        const {skills} = this.state
        return (
            <>
                <h2> Add Your Skill </h2>
                <div className="skill">
                    <ul class="hul">
                        { skills.map((skill, i) => {
                            return (
                                <li key={i}> {skill} <button onClick={() => this.removeSkill(i)}>+</button> </li>
                            )
                        }) }
                        <li className="input-skill">
                            <input onKeyDown={this.addSkill} type="text" size="4" ref={this.inputRef} />
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}

export default about
