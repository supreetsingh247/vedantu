import React from 'react';
import BaseLayout from './InitializationViewItems/BaseLayout/BaseLayout';
import styles from './initialization.scss';
import { browserHistory } from 'react-router';
import { storeLocalData, getLocalData } from '../common/Helper';

class InitializationContainer extends React.Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      inputFields: {
        projectName: '',
        email: '',
        emailDisabled: false,
      }
    }
    this.onTextChange = this.onTextChange.bind(this)
    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount () {
    if(localStorage !== undefined) {
      if(localStorage.getItem('email')) {
        let inputFields = this.state.inputFields;
        inputFields.email = localStorage.getItem('email')
        this.setState({ inputFields: inputFields, emailDisabled: true });
      }
    }
  }

  onTextChange (event) {
    const field = event.target.name;
    let inputFields = this.state.inputFields;
    inputFields[field] = event.target.value;
    return this.setState({inputFields: inputFields});
  }

  submitForm (e) {
    // e.preventDefault();
    if(document.getElementById('initForm') && document.getElementById('initForm').checkValidity()) {
      e.preventDefault();
      console.log(this.state);
      storeLocalData('email', this.state.inputFields.email);
      let projects = getLocalData('projects');
      let count = 0;
      if(projects) {
        for(let i=0; i< projects.length; i++) {
          if(projects[i].name === this.state.inputFields.projectName) {
            count ++;
            alert('Project Already exists');
          }
        }
      }
      if(count === 0) {
        let projects = getLocalData('projects') || [];
        let currentProject = { name: this.state.inputFields.projectName, canvases: []}
        projects.push(currentProject);
        storeLocalData('projects', projects);
        storeLocalData('currentProject', currentProject);
        browserHistory.push('/draw-page');
      }
    }
  }

  render () {
    return (
      <div className="initialization">
        <BaseLayout 
          projectName={this.state.inputFields.projectName}
          onChange={this.onTextChange}
          email={this.state.inputFields.email}
          submitForm={this.submitForm}
          emailDisabled={this.state.emailDisabled}
        />
      </div> 
    )
  }
} 
    
export default InitializationContainer;
