import {Item,Button, Segment, ItemGroup, ItemContent, Icon} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Activity } from "../../../app/models/activity"

interface Props{
    activity:Activity
}
function ActivityListItem({activity}:Props) {    
    return (
        <Segment.Group>
            <Segment>
                <ItemGroup>
                    <Item>                        
                        <Item.Image size='tiny' circular src={'/assets/user.png'}></Item.Image>
                        <ItemContent>
                            <Item.Header as={Link} to={`/activities/${activity.id}`}>{activity.title}</Item.Header>
                            <Item.Description>Hosted by Company</Item.Description>
                        </ItemContent>
                    </Item>
                </ItemGroup>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock'/>{activity.date}
                    <Icon name='marker'/>{activity.venue}    
                </span>
            </Segment>
            <Segment secondary>
                    Attendees goes here
            </Segment>
            <Segment clearing>
                <span>{activity.description}</span>
                <Button 
                as={Link} 
                to={`/activities/${activity.id}`}
                color='teal'
                floated='right'
                content='View'                
                 />
            </Segment>
        </Segment.Group>
    )
}
export default ActivityListItem
