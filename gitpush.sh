git add .
echo 'Enter the commit message:'
read commitMessage

echo 'Percentage Done:'
read Done

echo 'Working Hours:'
read Hours

git commit -m "$commitMessage; Done:$Done%; Hours:$Hours"

echo 'Enter the name of the branch:'
read branch

git push origin $branch

