import os
import re
import random
import string

def generate_random_name(length=4):
    """Generate a random string of fixed length."""
    return ''.join(random.choices(string.ascii_lowercase, k=length))

def rename_files_in_directory():
    # Get the parent directory path
    folder_path = os.path.abspath(os.path.join(os.getcwd(), ".."))

    # List all files in the parent directory
    files = [f for f in os.listdir(folder_path) if os.path.isfile(os.path.join(folder_path, f))]

    # Sort files to ensure consistent renaming order
    files.sort()

    # Limit the number of files to 100
    max_files = min(len(files), 100)

    # Regex pattern to match filenames that are integers followed by an extension
    integer_pattern = re.compile(r'^(\d+)(\.[a-zA-Z0-9]+)$')

    # First pass: Rename to random 4-letter names
    temp_files = []
    for old_name in files:
        file_extension = os.path.splitext(old_name)[1]
        new_temp_name = f"{generate_random_name()}{file_extension}"
        old_path = os.path.join(folder_path, old_name)
        new_temp_path = os.path.join(folder_path, new_temp_name)
        
        while os.path.exists(new_temp_path):
            new_temp_name = f"{generate_random_name()}{file_extension}"
            new_temp_path = os.path.join(folder_path, new_temp_name)
        
        os.rename(old_path, new_temp_path)
        temp_files.append((new_temp_name, old_name))
        print(f"Temporarily Renamed: {old_name} -> {new_temp_name}")

    # Second pass: Rename to final names
    for i, (temp_name, original_name) in enumerate(temp_files):
        file_extension = os.path.splitext(original_name)[1]
        base_name = f"{i + 1}"  # New base name format
        new_final_name = f"{base_name}{file_extension}"
        temp_path = os.path.join(folder_path, temp_name)
        final_path = os.path.join(folder_path, new_final_name)
        
        while os.path.exists(final_path):
            base_name = f"{i + 1}_{generate_random_name(2)}"  # Modify base name if needed
            new_final_name = f"{base_name}{file_extension}"
            final_path = os.path.join(folder_path, new_final_name)
        
        os.rename(temp_path, final_path)
        print(f"Renamed: {temp_name} -> {new_final_name}")

    print(f"Renamed {max_files} files.")

if __name__ == "__main__":
    rename_files_in_directory()
