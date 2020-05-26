Browser("Browser").ClearCache													'Clear the browser cache, the application sometimes gets pushed changes that require a clear cache
Browser("Browser").Navigate "https://pg.com/"									'Navigate to the URL @@ hightlight id_;_132096_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Browser").Maximize														'Maximize the browser or the objects won't be visible
Browser("Browser").Sync
AIUtil.SetContext Browser("Browser")											'Instruct the AI SDK to start working against the browser
'AIUtil("text_box", "What can we help you find?").Type "Tide"
'AIUtil.FindTextBlock("Tide Loads of Hope").Click
'AIUtil("down_triangle", micNoText, micFromTop, 4).Click
AIUtil.FindTextBlock("Our Company").Click
AIUtil.FindTextBlock("Newsroom 7'").Click

'AIUtil("right_triangle").Click
AIUtil.SetContext Browser("Browser Tab 2")											'Instruct the AI SDK to start working against the browser
AIUtil.FindTextBlock("News Releases").Click



