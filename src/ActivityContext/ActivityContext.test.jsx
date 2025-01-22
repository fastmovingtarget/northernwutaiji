import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ActivityProvider, { useActivity } from './ActivityContext';

describe("Current Activity works correctly", () => {
    test('Activity context has currentActivity inside', () => {
        function ActivityContextTest(){
            const activityData = useActivity();
            
            return (<div>{JSON.stringify(activityData)}</div>)
        }

        render(
          <ActivityProvider>
              <ActivityContextTest/>
          </ActivityProvider>
        );

        let activityElement = screen.getByText(/currentActivity/i)
        expect(activityElement).toBeInTheDocument();
    });
    test('Activity Context contains set function: setCurrentActivity', () => {
        function ActivityContextTest(){
            const activityData = useActivity();
            
            return (<div>{activityData.setCurrentActivity?.toString()}</div>)
        }

        render(
          <ActivityProvider>
              <ActivityContextTest/>
          </ActivityProvider>
        );

        let functionElement = screen.getByText(/function/i)
        expect(functionElement).toBeInTheDocument();
    });
    test("currentActivity can be changed by set function", async () => {
        const user = userEvent.setup();
        function ActivityContextTest(){
            const activityData = useActivity();
            
            return (<div>
                <button onClick={() => activityData.setCurrentActivity("testing")}>{"" + activityData.currentActivity}</button>
              </div>)
        };

        render(
          <ActivityProvider>
              <ActivityContextTest/>
          </ActivityProvider>
        );

        let buttonElement = screen.getByText(/null/i);
        expect(buttonElement).toBeInTheDocument();

        await user.click(buttonElement)

        let newButtonElement = screen.getByText(/testing/i)
        expect(newButtonElement).toBeInTheDocument();

    })
})
describe("Form Progress state works correctly", () => {
    test('Activity context has formProgress inside', () => {
        function ActivityContextTest(){
            const activityData = useActivity();
            
            return (<div>{JSON.stringify(activityData)}</div>)
        }

        render(
          <ActivityProvider>
              <ActivityContextTest/>
          </ActivityProvider>
        );

        let activityElement = screen.getByText(/formProgress/i)
        expect(activityElement).toBeInTheDocument();
    });
    test('Activity Context contains set function: setFormProgress', () => {
        function ActivityContextTest(){
            const activityData = useActivity();
            
            return (<div>{activityData.setFormProgress?.toString()}</div>)
        }

        render(
          <ActivityProvider>
              <ActivityContextTest/>
          </ActivityProvider>
        );

        let functionElement = screen.getByText(/function/i)
        expect(functionElement).toBeInTheDocument();
    });
    test("formProgress can be changed by set function", async () => {
        const user = userEvent.setup();
        function ActivityContextTest(){
            const activityData = useActivity();
            
            return (<div>
                <button onClick={() => activityData.setFormProgress("90%")}>{"" + activityData.formProgress}</button>
              </div>)
        };

        render(
          <ActivityProvider>
              <ActivityContextTest/>
          </ActivityProvider>
        );

        let buttonElement = screen.getByText(/null/i);
        expect(buttonElement).toBeInTheDocument();

        await user.click(buttonElement)

        let newButtonElement = screen.getByText(/90%/i)
        expect(newButtonElement).toBeInTheDocument();

    })
})
describe("Level data state works correctly", () => {
    test('Activity context has levelData inside', () => {
        function ActivityContextTest(){
            const activityData = useActivity();
            
            return (<div>{JSON.stringify(activityData)}</div>)
        }

        render(
          <ActivityProvider>
              <ActivityContextTest/>
          </ActivityProvider>
        );

        let activityElement = screen.getByText(/levelData/i)
        expect(activityElement).toBeInTheDocument();
    });
    test('Activity Context contains set function: setLevelData', () => {
        function ActivityContextTest(){
            const activityData = useActivity();
            
            return (<div>{activityData.setLevelData?.toString()}</div>)
        }

        render(
          <ActivityProvider>
              <ActivityContextTest/>
          </ActivityProvider>
        );

        let functionElement = screen.getByText(/function/i)
        expect(functionElement).toBeInTheDocument();
    });
    test("levelData can be changed by set function", async () => {
        const user = userEvent.setup();
        function ActivityContextTest(){
            const activityData = useActivity();
            
            return (<div>
                <button onClick={() => activityData.setLevelData({level:99, strength:125, flexibility:140, stamina:100, willpower:135, mindfulness:165})}>{JSON.stringify(activityData.levelData)}</button>
              </div>)
        };

        render(
          <ActivityProvider>
              <ActivityContextTest/>
          </ActivityProvider>
        );

        let buttonElement = screen.getByText(/null/i);
        expect(buttonElement).toBeInTheDocument();

        await user.click(buttonElement)

        let newButtonElement = screen.getByText(/"level":99/i)
        expect(newButtonElement).toBeInTheDocument();

    })
})
