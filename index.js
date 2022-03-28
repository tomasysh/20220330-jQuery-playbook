$(document).ready(function() {

    const newAgentInfo = {
        name: 'Sophia',
        active: true,
    }

    const agentInfoOne = {
        name: 'Tomas',
        active: false,
    }

    $.extend(newAgentInfo, agentInfoOne);

    console.log('newAgent', newAgentInfo);
    console.log('agentTwo', agentInfoOne);
    
});